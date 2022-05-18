import './styles.css';
import { Posting } from 'types/posting';
import { formatDate, formatNumber, formatPrice } from 'util/formatters';

type Props = {
    posting: Posting;
}

const PostingCard = ( {posting} : Props) => {
    return (
        <div className="base-card posting-card">
            <div className="line1">
                <div className="name">
                    <h2>{posting.employee.name}</h2>
                </div>
                <div className="data">
                    <p>{formatDate(posting.date)}</p>
                </div>
                <div className="unity-x-price">
                    <p>{formatNumber(posting.quantity)} {posting.unit} x {formatPrice(posting.price)}</p>
                </div>
                <div className="total">
                    <p>Total: {formatPrice(posting.quantity * posting.price)}</p>
                </div>
                <div className="status">
                    <h2>{posting.resolved? "RESOLVIDO" : "PENDENTE"}</h2>
                </div>
            </div>
            <div className="line2">
                <div className="provider">
                    <p>Fornecedor: {posting.provider.name}</p>
                </div>
                <div className="client">
                    <p>Cliente: {posting.client.contact}</p>
                </div>
                <div className="obs">
                    <p>Obs.: {posting.note}</p>
                </div>
            </div>
        </div>
    );
}

export default PostingCard;