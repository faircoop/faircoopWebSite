import React, { Component } from 'react'
import classNames from 'classnames'
import { translate } from 'react-i18next'
import {Down} from '../../icons'
import './style.scss'

class Horizontal extends Component {

  constructor (props) {
    super(props)
    this.handleDropdown = this.handleDropdown.bind(this)
    const { i18n } = this.props
    this.state = {
      language: i18n.language,
      active: false
    }

    this.handleChangeLanguage = this.handleChangeLanguage.bind(this);
  }

  componentWillReceiveProps (nextProps) {
    this.setState({ language: nextProps.i18n.language })
  }

  handleDropdown () {
    this.setState({active: !this.state.active})
  }

  handleChangeLanguage (lng) {
    const { i18n } = this.props
    i18n.changeLanguage(lng)
  }

  renderLanguageChoice ({ code, label }) {
    const buttonClass = classNames('LanguageSwitcher__button', {
      'LanguageSwitcher__button--selected': this.state.language === code
    })
    return (
      <button
        key={code}
        className={buttonClass}
        onClick={() => this.handleChangeLanguage(code)}
      >
        {label}
      </button>
    )
  }

  render () {
    const languages = [
      { code: 'ba', label: 'Bosnian' },
      { code: 'cat', label: 'Catalan' },
      { code: 'cr', label: 'Croatian' },
      { code: 'de', label: 'German' },
      { code: 'en', label: 'English' },
      { code: 'es', label: 'Spanish' },
      { code: 'fr', label: 'French' },
      { code: 'gr', label: 'Greek' },
      { code: 'it', label: 'Italian' },
      { code: 'ku', label: 'Kurdish' },
      { code: 'pr', label: 'Portuguese' },
      { code: 'ru', label: 'Russian' },
      { code: 'se', label: 'Serbian' },
      { code: 'tu', label: 'Turkish' }
    ]
    return (
        <div className="languageSwitcher horizontal">
          <div className="languageSwitcher_list">
            {languages.map((language) => this.renderLanguageChoice(language))}
          </div>
        </div>
    )
  }
}

export default translate()(Horizontal)
