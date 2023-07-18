import React from "react";
import axios from "axios";
class UserSignupPage extends React.Component {
    state={
        username:null,
        surname:null,
        tc:null,
        phone:null,
    }
    onChange=event=>{
        const {name,value} = event.target
         this.setState({
            [name]:value
        })
    }
    onClickSignup=event=>{
        event.preventDefault();
        const body={
            username:this.state.username,
            surname:this.state.surname,
            tc:this.state.tc,
            phone:this.state.phone
        }
        axios.post("/api/1.0/users",body)
    }
    render() {
        return (
            <form>
               <h1>Car Sigortama Hoşgeldiniz</h1> 
               <div>
                    <label>Kullanici Adi:</label>
                    < input name="username" onChange={this.onChange}/>
                </div>
                <div>
                    <label>Kullanici Soyadi:</label>
                    <input name="surname" onChange={this.onChange}/>
                </div>
                <div>
                    <label>Ruhsat Sahibi TC:</label>
                    <input name="tc"onChange={this.onChange}/>
                </div>
                <div>
                    <label>Cep Telefonu:</label>
                    <input name="phone"onChange={this.onChange}/>
                </div>
                
                <button onClick={this.onClickSignup}>Kargo Sigortasi Teklifi Al</button>
            </form>
            

        )
    }
}
export default UserSignupPage;