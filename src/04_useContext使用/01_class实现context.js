import React, { Component } from 'react'
import { UserContext, ThemeContext } from '../App'

export default class ContextClass extends Component {
    render() {
        return (
            <UserContext.Consumer>
                {
                    value => {
                        return (
                            <ThemeContext.Consumer>
                                {
                                    theme => {
                                        return (
                                            <div>
                                                <h2 style={theme}>用户: {value.name}</h2>
                                                <h2 style={theme}>用户年龄: {value.age}</h2>
                                            </div>
                                        )
                                    }
                                }
                            </ThemeContext.Consumer>
                        )
                    }
                }
            </UserContext.Consumer>
        )
    }
}
