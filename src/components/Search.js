import React, { Component } from 'react'

class Search extends Component {
    constructor(props) {
        super(props)
        this.onChange = this.onChange.bind(this)
        this.onSubmit = this.onSubmit.bind(this)
        this.state = {
            keyword: ''
        }
    }

    onChange(e) {
        this.setState({ //method this objesini kaybettiği için this prm'si cont. içinde tekrar bind edilir.
            keyword: e.target.value
        })
    }
    onSubmit(e) {
        e.preventDefault() //sayfanın return edilmesini engellemiş olur.
        if(this.state.keyword === '') {
            this.props.setAlert('Lütfen bir anahtar kelime giriniz.','danger')
        }
        else {
            this.props.searchUser(this.state.keyword)
            this.setState({ keyword: '' })
        }
        
    }
    render() {
        return (
            <div className='container my-3'>
                <form onSubmit={this.onSubmit}>

                    <div className='input-group'>
                        <input type='text' value={this.state.keyword} onChange={this.onChange} className='form-control' />
                        <div className="input-group-append">
                            <button type='submit' className='btn btn-primary mx-1'>Search</button>
                        </div>
                    </div>
                </form >
                {
                this.props.showClearButton && <button type="button" onClick={this.props.clearUsers} className='btn btn-secondary btn-sm mt-2' style={{ display: "block"}}>Clear Result</button>
                }
               
            </div>
        )
    }
}

export default Search