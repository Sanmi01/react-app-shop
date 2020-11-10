import React  from 'react';
import { Card, CardImg,  CardText, CardTitle} from 'reactstrap';

const Displayshoes = ({shoes}) => {
    const shoesList = shoes.map(shoe => {
        return(
            <div key={shoe.id} className="col-md-4 col-sm-6 col-12 mt-3">
                <Card>
                    <CardImg width="100%" src={shoe.image} alt={shoe.name} />
                    <span className="label">{shoe.label}</span>
                    <CardTitle className="ml-5 text">{shoe.name}</CardTitle>
                    <CardText className="ml-5 text">{shoe.price}</CardText>
                </Card>
            </div>
        )
    })

    return (
        <div className="container">
            <div className="row">
            { shoesList }
            </div>
        </div>
    )
}

export default Displayshoes;