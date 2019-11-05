import {useState} from 'react';
import { createContainer } from 'unstated-next';

const useAuthContainer = _ => {
    const [type, setType] = useState("auth");
    const [id, setId] = useState("");
    const [pass, setPass] = useState("");
    const [token, setToken] = useState("");

    /**
     * タイプ変更イベント
     * @param {Object} e React Event
     */
    const handleChangeType = e => {
        document.title = `${(e.target.value === "auth" ? "通常の認証" : "Basic認証")}用のトークンを作成します。`;
        setType(e.target.value);
    }

    const handleChangeId = e => {
        setId(e.target.value);
    }

    const handleChangePass = e => {
        setPass(e.target.value);
    }

    const generateToken = _ => {
        const token = btoa(`${id.trim()}:${pass.trim()}`);
        setToken(type === "auth" ? token : `Basic ${token}`);
    }

    const copyText = _ => {
        if (navigator.clipboard) {
            navigator.clipboard.writeText(token);
            return true;
        }else{
            return false;
        }
    }

    return {
        type, id, pass, token, 
        handleChangeId, handleChangePass, handleChangeType, 
        generateToken, copyText
    };
}

export const AuthContainer = createContainer(useAuthContainer);