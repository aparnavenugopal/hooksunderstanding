

const Item = React.memo(({ name }) => {
    console.log(`rendering item: ${name}`);
    return <li>{name}</li>
}) ;