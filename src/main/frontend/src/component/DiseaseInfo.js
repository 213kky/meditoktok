export default function DiseaseInfo({subject, content}) {
    return (
        <>
            <div className="box">{subject}</div>
            <span className="boxInfo">{content}</span>
        </>
    );
}