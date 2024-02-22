import react from 'react';
import reactDOM from 'react-dom';

class App extends react.Component {

    constructor() {
        super();
        this.state = {
            nilai1: null,
            nilai2: null,
            operator: null,
            hasil: null
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const nilai1 = parseInt(this.refs.nilai1.value)
        const nilai2 = parseInt(this.refs.nilai2.value)
        const operator = this.refs.operator.value;

        var hasil;
        switch (operator) {
            case '+':
                hasil = nilai1 + nilai2;
                break;
            case '-':
                hasil = nilai1 - nilai2;
                break;
            case '*':
                hasil = nilai1 * nilai2;
                break;
            case '/':
                hasil = nilai1 / nilai2;
                break;
            
        }

        this.setState({nilai1, nilai2, operator, hasil})

        this.refs.nilai1.value = null;
        this.refs.nilai2.value = null;

    }

    renderHasil()  {
        const {nilai1, nilai2,operator,hasil} = this.state;

        if (this.state.hasil) {
            return(
                <div>
                    <br />
                    <p className="alert alert-succes">
                    </p>
                </div>
            );
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <label>Nilai:</label>
                    <input type="number" ref="nilai1" className="form-control"></input>
                    <input type="number" ref="nilai2" className="form-control"></input>
                    <label>Operator:</label>
                    <select ref="operator" className="form-control">
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">*</option>
                        <option value="/">/</option>
                        </select><br />
                        <button className="btn btn-primary">Lihat Hasil</button>
                </form>
             {/*hasil*/}
             {this.renderHasil()}
             {/*hasil*/}

            </div>
        );
    }


}