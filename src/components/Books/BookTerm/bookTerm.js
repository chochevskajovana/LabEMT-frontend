import React from 'react';
import {Link} from "react-router-dom";

const bookTerm = (props) => {
    return (
        <tr>
            <td>{props.term.name}</td>
            <td>{props.term.category}</td>
            <td>{props.term.author.name + " " + props.term.author.surname}</td>
            <td>{props.term.availableCopies}</td>
            <td className={"text-right"}>
                <a title={"Delete"} className={"btn btn-outline-danger me-2"}
                   onClick={() => props.onDelete(props.term.id)}>
                    Delete
                </a>
                <Link className={"btn btn-outline-secondary me-2"}
                      onClick={() => props.onEdit(props.term.id)}
                      to={`/books/edit/${props.term.id}`}>
                    Edit
                </Link>
                {/*<Link title={"Mark as taken"} className={"btn btn-outline-primary"}*/}
                {/*   onClick={() => props.onTakenBook(props.term.id)}*/}
                {/*   to={`/books/take/${props.term.id}`}>*/}
                {/*    Mark as taken*/}
                {/*</Link>*/}

                {props.term.availableCopies ? (
                    <button className={"btn btn-outline-primary"}
                            onClick={() => props.onTakenBook(props.term.id)}>
                        Take the book</button>
                ) : (
                    <button className={"btn btn-outline-secondary"}
                            disabled
                            onClick={() => props.onTakenBook(props.term.id)}>
                        Take the book</button>
                )}
            </td>
        </tr>
    )
}
export default bookTerm;
