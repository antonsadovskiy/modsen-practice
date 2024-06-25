export type PhotoType = {
    "albumId": number,
    "id": number,
    "title": string,
    "url": string,
    "thumbnailUrl": string
}

type ListPropsType = {
    list: PhotoType[];
}

export const List = ({list}: ListPropsType) => {
    return (
        <><h3>Render List</h3>
            <ul style={{display: 'flex', flexDirection: "column", gap: '10px'}}>
                {list.map(item => <li key={item.id}>
                    <div>Album Id:{item.albumId}</div>
                    <div>Id: {item.id}</div>
                    <div>Title: {item.title}</div>
                    <div>
                        <div>Url:</div>
                        <img src={item.url} alt={item.title}/></div>
                    <div>
                        <div>thumbnailUrl:</div>
                        <img src={item.thumbnailUrl} alt={item.title}/></div>
                </li>)}
            </ul>
        </>
    )
}