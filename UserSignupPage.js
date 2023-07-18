import React from "react";

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
    render() {
        return (
            <form>
               <h1>Car Sigortama Hoşgeldiniz</h1> 
               <div>
                    <label>Kullanici Adi:</label>
                    < input name="username"/>
                </div>
                <div>
                    <label>Kullanici Soyadi:</label>
                    <input name="surname"/>
                </div>
                <div>
                    <label>Ruhsat Sahibi TC:</label>
                    <input name="tc"/>
                </div>
                <div>
                    <label>Cep Telefonu:</label>
                    <input name="phone"/>
                </div>
                <button>Kargo Sigortasi Teklifi Al</button>
            </form>
            

        )
    }
}
export default UserSignupPage;