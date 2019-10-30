import React from 'react';

export default class Auth extends React.Component{
    constructor(){
        super();
        this.createToken = this.createToken.bind(this);
    }
    createToken(){
        console.log(this.props.type)
        this.props.changeType(this.props.type);
        this.props.generateToken();
    }
    render(){
        return (
            <>
                <h2>{this.props.type === "auth" ? "アプリAPI認証トークン" : "Basic認証用トークン作成"}</h2>
                <input 
                    type="text" 
                    placeholder="ログイン名"
                    value={this.props.state.id}
                    onChange={this.props.changeId}
                />
                <input
                    type="password"
                    placeholder="パスワード"
                    value={this.props.state.pass}
                    onChange={this.props.changePassword}
                />
                <button onClick={this.createToken}>トークン生成</button>
                <input 
                    type="text"
                    value={this.props.state.token}
                    onChange={this.props.generateToken}
                />
                <button onClick={this.props.copyText}>コピー</button>
            </>
        );
    }
}