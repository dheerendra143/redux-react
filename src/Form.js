import React from 'react';
import { Fragment } from 'react';
import { useState } from 'react';
import { useSelector , useDispatch} from 'react-redux';
import { increment, decrement, sign_in, add_user} from './actions';

const Form = function () {
    const [fname, setFname] = useState("dheerendra kumars");
    const [lname, setLname] = useState("sinngh");
    const [email, setEmail] = useState("singhdhjgj@yahoo.lkj");
    const [contactNo, setContactNo] = useState(8073508136);
    const [users, setUser] = useState([]);

    const counter = useSelector(state => state.counter);
    const isLogged = useSelector(state => state.isLogged);
    const userList = useSelector(state => state.userList);
    
    const dispatch = useDispatch();

    function handleSubmit(event) {
        event.preventDefault();
        let tempUser = {
            "first_name": fname,
            "last_name": lname,
            "email": email,
            "contact": contactNo
        };
        dispatch(add_user(tempUser));
        dispatch(increment());
    }

    return (
        <Fragment>
            Login:{isLogged}
            <hr/>
                <form onSubmit={(e) => handleSubmit(e)}>
                    First Name:
                <input type="text" value={fname} onChange={(e) => setFname(e.target.value)} />
                    <br />
                Last Name:
                <input type="text" value={lname} onChange={(e) => setLname(e.target.value)} />
                    <br />
                Email Id:
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    <br />
                Contact No:
                <input type="text" value={contactNo} onChange={(e) => setContactNo(e.target.value)} />
                    <button>Save</button>
                </form>
              
                <section>
                    <input type="text" />
                    <input type="text" />

                    <button onClick={() => dispatch(increment())}>+</button>
                    <button onClick={() => dispatch(decrement())}>-</button>
                    <button onClick={() => dispatch(sign_in())}>SIGN IN</button>
                </section>
            <br />
            <hr />
            <h2>List:</h2>
            Counter:{counter}
            
            <ul>
                {
                    userList && userList.map((user, id) =>
                        <li key={id}>
                            {user.first_name}
                            <hr/>
                            </li>
                    )
                }
            </ul>
        </Fragment>
    )
}
export default Form;