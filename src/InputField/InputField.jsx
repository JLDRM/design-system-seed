import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const InputFieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: none;
  width: 100%;

  input {
    font-size: calc(10px + 2vmin);
    color: var(--primary-text);
  }

  p {
    margin: 0;
  }

  ${(props) =>
    props.error &&
    `
  input {
    border-color: red
  }
  `}
`;

const Error = styled.p`
  color: red;
`;

export const InputField = ({ label, children, htmlFor, error }) => {
  return (
    <InputFieldContainer error={error}>
      {label && (
        <label htmlFor={htmlFor}>
          <p>{label}</p>
        </label>
      )}
      {children}
      {error && (
        <div data-testid={`${htmlFor}-error`}>
          <Error>{error?.message}</Error>
        </div>
      )}
    </InputFieldContainer>
  );
};

InputField.propTypes = {
  label: PropTypes.string.isRequired,
  hmltFor: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  error: PropTypes.object,
};

InputField.defaultProps = {
  label: 'Name:*',
  hmltFor: 'username',
  error: '',
};
