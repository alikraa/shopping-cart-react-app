import { ButtonDeleteProps } from '../../ts/interfaces';

const ButtonDelete = ({ handleClick, id }: ButtonDeleteProps) => {
  return (
    <div className="product__button-delete">
      <button type="button" onClick={() => handleClick(id)}>
        <img src="./img/icons/delete-button.svg" alt="Delete" />
      </button>
    </div>
  );
};

export { ButtonDelete };
