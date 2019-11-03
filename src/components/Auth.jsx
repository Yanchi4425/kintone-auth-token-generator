import React from 'react';
import { AuthContainer } from './AuthContainer'

const Form = _ => {
    const authContainer = AuthContainer.useContainer();

    return (
        <>
            <nav>
                <label><input type="radio" name="type" value="auth" onChange={authContainer.handleChangeType} checked={authContainer.type === "auth"} />認証トークン</label>
                <label><input type="radio" name="type" value="basic" onChange={authContainer.handleChangeType} checked={authContainer.type !== "auth"} />Basic 認証トークン</label>
            </nav>
            <input
                type="text"
                placeholder="ログイン名"
                value={authContainer.id}
                onChange={authContainer.handleChangeId}
            />
            <input
                type="password"
                placeholder="パスワード"
                value={authContainer.pass}
                onChange={authContainer.handleChangePass}
            />
            <button onClick={authContainer.generateToken}>トークン生成</button>
            <input
                type="text"
                readOnly
                value={authContainer.token}
            />
            <button onClick={authContainer.copyText}>コピー</button>
        </>
    );
}
export const Auth = _ => {
    return (
        <AuthContainer.Provider>
            <Form />
        </AuthContainer.Provider>
    );
}
