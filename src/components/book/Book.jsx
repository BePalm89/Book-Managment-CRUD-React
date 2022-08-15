import {useNavigate,} from "react-router-dom";
import Card from "antd/es/card/Card";
import {Button} from "antd";

const Book = ({
    id,
    name,
    author,
    quantity,
    price,
                  handleRemoveBook
}) => {
    const navigate = useNavigate()
    return (
        <div>
            <Card title={name}  style={{ width: 300 }}>
                <p>Author: { author }</p>
                <p>Quantity: {quantity}</p>
                <p>Price: {price}</p>
                <Button type="primary" onClick={() => navigate(`/edit/${id}`) }>
                    Edit
                </Button>
                <Button type="primary"  danger onClick={() => handleRemoveBook(id)}>
                    Delete
                </Button>
            </Card>
        </div>
    )
}

export default Book
