function FilterableProductTable({products}) { //products 는 props(properties)이다.
    const [searchText, setSearchText] = useState('')
    const [stock, setStock] = useState(false)

    return ( // 탑다운방식
        <div> 
            <SearchBar
                searchText={searchText}
                stock={stock}
                setSearchText={setSearchText}
                setStock={setStock}/>
            <ProductTable products={products}
                searchText={searchText}
                stock={stock}/>
        </div>
    )
}
/*
{ //props 객체
    searchText: '',
    stock: false,
    setSearchText: fn,
    setStock: fn
}
*/
function SearchBar({searchText, stock, setSearchText, setStock}) { //searchText, stock은 구조분해 할당으로 값을 전달해준다.
    return ( //JSX 부분
        <form>
            <input type='text' placeholder='search...'/><br/>
            <label>
                <input type='checkbox'/>
                {' '}
                only show products in stock
            </label>
        </form>
    )
}

function ProductTable({products, searchText, stock}) {
    const rows = []
    let lastCategory = null

    products.forEach(product => {
        if(product.category != lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}/> // cache로 꺼낼때 해당컴포넌트를 key를 통해찾아서 꺼낸다.
            )
        }

        rows.push(
            <ProductRow
                product={product}
                key={product.productName}/>
        )

        lastCategory = product.category
    })

    return (
        <table>
            <thead>
                <tr>
                    <th>name</th>
                    <th>price</th>
                </tr>
            </thead>
            <tbody>{rows}</tbody>
        </table>
    )
}

function ProductCategoryRow({category}) {
    return (
        <tr>
            <th colSpan='2'>
                {category}
            </th>
        </tr>
    )
}

function ProductRow({product}) { // ProductRow는 product에 따라 바뀜.
    const productName = product.isStock ? product.productName :
        <span style={{color: 'red'}}>{product.productName}</span>
    
    return (
        <tr>
            <td>{productName}</td>
            <td>{product.price}</td>
        </tr>
    )
}

//백엔드가 없으므로 데이터를 하드코딩해서 준비
const products = [
    {category: 'fruit', price: 1000, isStock: true, productName: 'apple'},
    {category: 'fruit', price: 1000, isStock: true, productName: 'dragonFruit'},
    {category: 'fruit', price: 2000, isStock: false, productName: 'passionFruit'},
    {category: 'vegetable', price: 2000, isStock: true, productName: 'spinach'},
    {category: 'vegetable', price: 4000, isStock: false, productName: 'pumpkin'},
    {category: 'vegetable', price: 9000, isStock: true, productName: 'pea'}
]

export default function App() {
    return <FilterableProductTable products={products}/>
}