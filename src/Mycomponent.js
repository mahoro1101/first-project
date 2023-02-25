import React from 'react';
import PropTypes from 'prop-types';

const Mycomponent = ({name, children}) => {
    // 비구조 할당 
    return (
        <div>
            나의 새롭고 멋진 컴포넌트 {name} 입니다.
            {children}
        </div>
    );
};

Mycomponent.defaultProps = {
    name : '기본 이름',
};

Mycomponent.propTypes = {
    name : PropTypes.string,
    favoriteNumber : PropTypes.number.isRequired
};

export default Mycomponent;