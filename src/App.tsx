import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Avatar from './components/Avatar/Avatar';
import avatar from './images/avatar.jpg';
import Info from './components/Info/Info';
import {Card, Button} from 'react-bootstrap';

function App() {
    return (
        <div className="App">
            <Card className="cardWrapper">
                <Card.Header>Portfolio</Card.Header>
                <div>
                    <Avatar imgUrl={avatar} className="avatar"/>
                    <Info/>
                    <Card.Text className="text">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid amet animi aperiam architecto
                        aspernatur assumenda commodi consequuntur cumque distinctio dolore ducimus eaque excepturi ipsam
                        iste maxime molestiae nam nihil nulla, qui quibusdam quod suscipit temporibus, voluptas.
                        Accusamus alias, at, cupiditate dignissimos dolorem doloremque dolorum earum eos exercitationem
                        facere fugiat illum itaque magni mollitia nam non, pariatur placeat quod quos rerum totam
                        veritatis voluptate voluptatum. Accusamus at aut commodi cumque debitis delectus dolore
                        doloribus dolorum eos esse eum harum inventore ipsam iste iure, laborum laudantium molestiae
                        numquam placeat possimus praesentium provident quia quisquam reiciendis rem repellat
                        reprehenderit saepe ut vero voluptatem! Dolore enim ipsa magnam nobis praesentium quidem sint
                        tempora. Atque consequuntur distinctio doloremque dolores eligendi error excepturi
                        exercitationem ipsam iure laboriosam magni minima minus natus non odit provident, quo quos
                        recusandae reiciendis rem sapiente, tempore ullam veniam vero vitae voluptates voluptatibus. A
                        ad alias aliquam aperiam, asperiores debitis, eos laudantium mollitia nulla odit, optio porro
                        quidem quos velit voluptatum.
                    </Card.Text>
                </div>
            </Card>
        </div>
    );
}

export default App;
