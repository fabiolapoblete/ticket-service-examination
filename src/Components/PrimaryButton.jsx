import "../Styles/App.css";

function PrimaryButton({ title, action }) {
    return (
        <button onClick={action} className="primaryButton">
            {title}
        </button>
    );
}

export default PrimaryButton;
