import React, { useState } from 'react';
import RepoData from './repoData/repoData';
import UserNameAndSurname from './userNameAndSurname/userNameAndSurname';
import classes from './userDataForm.module.css'

const useInput = (initialValue: string) => {
    const [value, setValue] = useState(initialValue)

    const onChange = (e: React.FormEvent<HTMLInputElement>) => {
        setValue(e.currentTarget.value)
    }

    const clear = () => {
        setValue('')
    }

    return{
        bind: {value, onChange},
        value,
        clear
    }
}

const UserDataForm = () => {

    const name = useInput('');
    const surname = useInput('');
    const handleReset = () => {       
        name.clear();
        surname.clear();   
    }
    

    return (
        <div className={classes.info}>
            <div>
                <div className={classes.infoName}>
                    <form>
                        <label htmlFor="name">Your name: </label>
                        <input type="text" id='name'{...name.bind} />
                        <br />
                        <label htmlFor="surname">Your surname: </label>
                        <input type="text" id='surname' {...surname.bind} />
                        <br />
                        <input type="reset" onClick={handleReset}/>
                        <input type="submit" id='submmitFullName' />
                    </form>
                </div>
            </div>

            <div className={classes.gender}>
                <p>Select your gender</p>
                <form>
                    <input type="radio" id='male' />
                    <label htmlFor="male">Male</label>
                    <input type="radio" id='female' />
                    <label htmlFor="female">Female</label>
                </form>
            </div>

            <div className={classes.colors}>
                <form>
                    <label htmlFor="colors">Choose your favorite color/s</label>
                    <br />
                    <select name="colors" id="colors"  defaultValue='red' multiple>
                        <option value="red">red</option>
                        <option value="green">green</option>
                        <option value="blue">blue</option>
                        <option value="black">black</option>
                        <option value="yellow">yellow</option>
                    </select>
                    <br />
                    <input type="submit" />
                </form>
            </div>

            <div className={classes.vehicle}>
                <form>
                    <label htmlFor="">What type of vehicle do you prefer?</label>
                    <br />
                    <label htmlFor="car">Car</label>
                    <input type="checkbox" id='car' />
                    <br />
                    <label htmlFor="bicycle">Bicycle</label>
                    <input type="checkbox" id='bicycle' />
                    <br />
                    <label htmlFor="scooter">Scooter</label>
                    <input type="checkbox" id='scooter' />
                    <br />
                </form>
            </div>

            <UserNameAndSurname name={name.value} surname={surname.value} />
            <RepoData />
        </div>

    )
}

export default UserDataForm;