import React  from "react";



class Comment extends React.Component{

    state = {
        firstName: '',
        lastName: ''
    }

    handleChangeFirstName = (event) =>{
        this.setState({
            firstName: event.target.value
        })
    }

    handleChangeLastName = (event) =>{
        this.setState({
            lastName: event.target.value
        })
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }

    render(){
        console.log("render: ",this.state)
        return(
            <div style={{textAlign: "center",margin: "auto"}}>
                <form>
                    <label for="fname">First name:</label><br/>

                    <input 
                    className="border border-2 border-black"
                    type="text" 
                    value={this.state.firstName}
                    onChange={(event)=>this.handleChangeFirstName(event)}
                    />
                    <br/>
                    <label for="lname">Last name:</label><br/>

                    <input type="text"
                    className="border border-2 border-black" 
                    value={this.state.lastName}
                    onChange={(event)=>this.handleChangeLastName(event)}
                    /><br/><br/>
                    <button
                    className="border border-2 border-black rounded-lg px-2 py-2"
                    onClick={(event) => this.handleSubmit(event)}>
                    Submit</button>
                </form> 
            </div>
        )
    }
}
export default Comment;