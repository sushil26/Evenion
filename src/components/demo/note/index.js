import React from "react";
import "./note.css";
import List from "./List";
import AddNote from "./Add";
import Edit from "./Edit";

class Itenarary extends React.Component {
  state = {
    id: null,
    invoice: {},
    itenraries: [],
    item: "",
    han: "",

    selectAll: false,
  };

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });
  };

  addinvoice = () => {
    if (!this.state.item) return;
    const invoice = {
      id: this.state.itenraries.length + 1,
      item: this.state.item,
      han: this.state.han,

      checked: true,
    };

    console.log(invoice);
    this.setState(
      {
        item: "",
        han: "",

        invoice: invoice,
        itenraries: [...this.state.itenraries, invoice],
      },
      () => console.log(this.state.itenraries)
    );
  };

  deleteinvoice = (id) => {
    const itenraries = this.state.itenraries.filter(
      (invoice) => invoice.id !== id
    );
    this.setState(
      {
        item: "",
        han: "",
        itenraries: itenraries,
      },
      () => {
        console.log(this.state.itenraries);
      }
    );
  };

  Closehandler = () => {
    this.setState({
      item: "",
      han: "",
    });
    this.setEditing(false);
  };

  checkChangeHandler = (id, status) => {
    console.log(status);
    let itenraries = [...this.state.itenraries];
    let index = itenraries.findIndex((obj) => obj.id === id);
    itenraries[index].checked = status;
    this.setState({ itenraries: itenraries }, () => {
      console.log(this.state.itenraries);
    });
  };

  selectAllhandler = (status) => {
    let itenraries = [...this.state.itenraries];

    for (var i = 0; i < itenraries.length; i++) {
      itenraries[i].checked = status;
    }

    this.setState({ itenraries: itenraries, selectAll: status }, () => {
      console.log(this.state.itenraries);
    });
  };

  editinvoice = (invoice) => {
    this.setEditing(true);
    this.setState({
      item: invoice.item,
      han: invoice.han,

      checked: invoice.checked,
      invoice: invoice,
    });
    console.log(invoice);
  };

  setEditing = (value) => {
    if (typeof value !== "boolean") {
      throw " This value must either be true or false";
    }
    this.setState({
      editing: value,
    });
  };

  updateinvoice = () => {
    const updatedItem = this.state.item;
    const updatedHan = this.state.han;

    const updatedinvoice = Object.assign({}, this.state.invoice, {
      item: updatedItem,
      han: updatedHan,

      checked: true,
    });
    const itenraries = this.state.itenraries.map((invoice) =>
      invoice.id === this.state.invoice.id ? updatedinvoice : invoice
    );
    this.setState({
      item: "",
      han: "",

      itenraries: itenraries,
    });
    this.setEditing(false);
  };

  render() {
    const { itenraries, editing } = this.state;
    return (
      <div className="App">
        <div className="row App-main">
          <List
            itenraries={itenraries}
            deleteinvoice={this.deleteinvoice}
            editinvoice={this.editinvoice}
            checkChangeHandler={this.checkChangeHandler}
            selectAll={this.state.selectAll}
            selectAllhandler={this.selectAllhandler}
          />
        </div>
        <div className="row App-main">
          {editing ? (
            <Edit
              item={this.state.item}
              han={this.state.han}
              handleInputChange={this.handleInputChange}
              setEditing={this.setEditing}
              updateinvoice={this.updateinvoice}
              Closehandler={this.Closehandler}
            />
          ) : (
            <AddNote
              item={this.state.item}
              han={this.state.han}
              handleInputChange={this.handleInputChange}
              addinvoice={this.addinvoice}
            />
          )}
        </div>
      </div>
    );
  }
}

export default Itenarary;
