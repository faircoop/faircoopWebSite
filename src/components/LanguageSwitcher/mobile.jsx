import React, { Component } from 'react'
import classNames from 'classnames'
import { translate } from 'react-i18next'
import {Cross} from '../../icons'
import './style.scss'

class LanguageMobile extends Component {

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
      { code: 'fr', label: 'French' },
      { code: 'gr', label: 'Greek' },
      { code: 'it', label: 'Italian' },
      { code: 'ku', label: 'Kurdish' },
      { code: 'se', label: 'Serbian' },
      { code: 'es', label: 'Spanish' }
    ]
    return (
      <div className='languages_container' onClick={() => this.handleDropdown()}>
        <div className="languageSwitcher">
          <div className="languageSwitcher_current">
            {this.state.language === 'en-US' ? 'English' 
            : languages.filter(lang => this.state.language.includes(lang.code))[0].label}
          </div>
          <div className={this.state.active ? "languageSwitcher_dropdown active" : "languageSwitcher_dropdown" }>
            <h5>Select your language</h5>
            <span className='close'><Cross width='21' height='21' color='#333'/></span>
            {languages.map((language) => this.renderLanguageChoice(language))}
          </div>
        </div>
      </div>
    )
  }
}

export default translate()(LanguageMobile)
