

interface BookProps {
    id: string;
    title: string;
    subtitle: string;
    authors: string;
    image: string;
    url: string;
}

interface BooksProps {
    data: BookProps;
}

function Books(props: Readonly<BooksProps>) {
    const { data } = props;
    return (
        <div>
            <p>{data.title}</p>
            <p>{data.subtitle}</p>
            <p>{data.authors}</p>
            <p>{data.url}</p>
        </div>
    )
}

export default Books






