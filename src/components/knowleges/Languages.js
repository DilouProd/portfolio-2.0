import React, { Component } from 'react';
import ProgressBar from './ProgressBar';

class Languages extends Component {
    state = {
        languages: [
            {id: 1, value: "Vlan", xp : 1.9},
            {id: 2, value: "DHCP Routeur", xp : 1.7},
            {id: 3, value: "DHCP Serveur", xp : 1.8},
            {id: 4, value: "DNS", xp : 1.8},
            {id: 5, value: "Rouatage (RIP)", xp : 1.8},
            {id: 6, value: "Adressage IP", xp : 1.8},
            {id: 7, value: "Active Directory", xp : 1.8},
        ],
        system: [
            {id: 1, value: "Virtualisation de Machine", xp : 1.8},
            {id: 2, value: "Windows", xp : 1.8},
            {id: 3, value: "Linux (Ubuntu, Debian)", xp : 1.8},
        ]
    }
    render() {
        let {languages, system} = this.state;

        return (
            <div className="languagesFrameworks">
                <ProgressBar
                    languages={languages}
                    className="languagesDisplay"
                    title="Compétences Réseau"
                />
                <ProgressBar
                    languages={system}
                    className="skillSystem"
                    title="Compétence Systeme"
                />
            </div>
        );
    }
}

export default Languages;