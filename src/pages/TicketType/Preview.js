import React, { useEffect } from 'react';
import { Tag } from 'antd';

const b = (ticketString, fields) => {
    const words = [];
    const replaceWord = 'replaceWord';
    let ticketStringToArr = ticketString.split('');
    let oldIndex = 0;
    fields.forEach((field) => {
        console.log(field);
        let i = ticketString.search('{');
        let finish = ticketString.search('}');
        for (i; i <= finish; i++) {
            ticketStringToArr[i] = replaceWord;
        }
        ticketStringToArr = ticketStringToArr.filter(i => i !== replaceWord);
        ticketString = ticketStringToArr.join('');
        let word = ticketStringToArr.slice(oldIndex, i-1).join('');
        words.push(word);
        oldIndex = finish + 1;
        console.log(ticketString);
        console.log('------------------------');
    });

    return words;
};

const Preview = ({ fields = [], ticket = '' }) => {
    console.log(ticket);
    const replaceConstant = '{}';
    const getStaticText = (ticketString) => {
        fields.forEach(field => {
            ticketString = ticketString.replace(`{${field}}`, replaceConstant);
        });
        return ticketString.split(replaceConstant);
    };
    const staticText = getStaticText(ticket);
    console.log(staticText);
    const startWithWord = ticket[0] === '{';
    const moreWordsThanFields = staticText.length > fields.length;
    if (moreWordsThanFields) {
        return (
            <>
                {
                    staticText.map((text, index) => {
                        if (startWithWord) {
                            return (
                                <span key={index}>
                                    {text}
                                    {
                                        fields[index] ?
                                            <Tag color='blue' key={index}>{fields[index]}</Tag>
                                        : null
                                    }
                                </span>);
                        }
                        return (<span key={index}><Tag color='blue' key={index}>{fields[index]}</Tag>{text}</span>);
                    })
                }
            </>
        );
    }
    return (
        <>
            {
                fields.map((field, index) => {
                    return (<span key={index}>{staticText[index]}<Tag color='blue' key={index}>{field}</Tag></span>);
                })
            }
        </>
    );
};

export default Preview;
