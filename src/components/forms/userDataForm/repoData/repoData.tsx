import React, { useEffect, useState } from 'react';


class RepoData extends React.Component<{}, {userName: string, login: string, id: string, followers: string}> {
    constructor(props: {}) {
        super(props);

        this.state = {
            userName: 'leopold271',
            login: '',
            id: '',
            followers: ''
        }
    }

    async componentDidMount() {

        try {
            let response = await fetch(`https://api.github.com/users/${this.state.userName}`, { method: 'GET' })
            if (response.status == 200) {
                let repo = await response.json();
                let { login, id, followers } = await repo;
                this.setState((prevState) => ({
                    login,
                    id,
                    followers
                }))
            }
        } catch (err) {
            console.log(err);
        }

    }


    render() {
        return (
            <div>
                <div>
                    user login: {this.state.login}
                </div>
                <div>
                    user id: {this.state.id}
                </div>
                <div>
                    user followers: {this.state.followers}
                </div>
            </div>
        )
    }
}







export default RepoData;