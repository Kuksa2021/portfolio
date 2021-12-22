import {Tabs, Tab, Card} from "react-bootstrap";
import './style.css';
import React from "react";

const Info = () => {
    return (
        <div className="infoWrapper">
            <Card.Title>Кукса Лилия Яновна</Card.Title>
            <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
                <Tab eventKey="home" title="Личная информация">
                    <Card.Text>
                        Дата рождения - 10.02.2000
                    </Card.Text>
                </Tab>
                <Tab eventKey="profile" title="Адресс">
                    <Card.Text>
                        Место проживание - Молдова, Тирасполь
                        Адрес - ул. 1 мая 102
                    </Card.Text>
                </Tab>
                <Tab eventKey="contact" title="Образование">
                    <Card.Text>
                        ПГУ Факультет - физико-математический
                        Специальность - прикладная математика и информатика
                        Курс - 4 курс
                    </Card.Text>
                </Tab>
            </Tabs>
        </div>
    );
}

export default Info;