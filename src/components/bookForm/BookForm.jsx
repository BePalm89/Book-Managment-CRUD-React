import {Button, Form, Input} from 'antd';
import {useState} from "react";
import { v4 as uuidv4 } from 'uuid';

const BookForm = (props) => {

    const [book, setBook] = useState(() => {
        return {
            name: props.book ? props.book.name : '',
            author: props.book ? props.book.author : '',
            quantity: props.book ? props.book.quantity : '',
            price: props.book ? props.book.price : ''
        }
    })


    const {name, author, quantity, price} = book;

    const handleOnSubmit = () => {
        const values = [name, author, quantity, price];


        const allFieldsFilled = values.every((field) => {
            const value = `${field}`.trim();
            return value !== '' && value !== '0';
        });

        if(allFieldsFilled) {
            const book = {
                id: uuidv4(),
                name ,
                author ,
                quantity,
                price
            };
            props.handleOnSubmit(book);
        }
    }

    const handleInputChange = (event) => {
        const {name, value} = event.target
        switch (name) {
            case 'quantity':
                if( value === '' || parseInt(value) === +value) {
                    setBook((prevState) => ({
                        ...prevState,
                        [name]: value
                    }))
                }
                break;
            case 'price':
                if(value === '' || value.match(/^\d+(\.\d{0,2})?$/)) {
                    setBook((prevState) => ({
                        ...prevState,
                        [name]: value
                    }))
                }
                break;
            default:
                setBook((prevState) => ({
                    ...prevState,
                        [name]: value
                }));
                break;
        }
    }

    return<div>
        <Form
        name="newBook"
        labelCol={{span: 8}}
        wrapperCol={{span: 8}}
        initialValues={{ remember: true }}
        autoComplete="off"
        onFinish={handleOnSubmit}
        initialValues={{
            name: book.name,
            author: book.author,
            quantity: book.quantity,
            price: book.price
        }}
        >
            <Form.Item
                label="Book name"
                name="name"
                rules={[{ required: true, message: 'Please input the name of the book!' }]}
            >
                <Input placeholder="Book name" name='name' onChange={handleInputChange} />
            </Form.Item>
            <Form.Item
                label="Book author"
                name="author"
                rules={[{ required: true, message: 'Please input the author of the book!' }]}
            >
                <Input placeholder="Book author" name='author' onChange={handleInputChange}/>
            </Form.Item>
            <Form.Item
                label="Book quantity"
                name="quantity"
                rules={[{ required: true, message: 'Please input the quantity!' }]}
            >
                <Input min={1}  placeholder="Book quantity" name='quantity' type='number' onChange={handleInputChange}/>
            </Form.Item>
            <Form.Item
                label="Book price"
                name="price"
                rules={[{ required: true, message: 'Please input the price of the book!' }]}
            >
                <Input placeholder="Book price"  name='price' type='number' onChange={handleInputChange} />
            </Form.Item>
            <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
            </Form.Item>
        </Form>
    </div>

};

export default BookForm;
