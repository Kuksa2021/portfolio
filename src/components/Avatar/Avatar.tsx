interface IProps {
    imgUrl: string;
    className: string;
}

const Avatar = ({imgUrl, className}: IProps) => {
    return (
        <img className={className} src={imgUrl} alt="avatar" width={300}/>
    );
}

export default Avatar;