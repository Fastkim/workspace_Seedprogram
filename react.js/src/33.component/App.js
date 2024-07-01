import {useState} from 'react'

function FilterableProductTable({products}) {
    const [searchText, setSearchText] = useState('')
    const [stock, setStock] = useState(false)

    /* 구조분해할당
        [a, b] = [1, 2] 배열을 반환
        {a, b} = {a: 'hello', b: 1} 객체를 반환
        const [searchText, setSearchText] = useState('')
        const [searchText, setSearchText] = ['','']
    */
    return (
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

function SearchBar({searchText, stock, setSearchText, setStock}) {
    return (
        <form>
            <input type='text' placeholder='search...'
                value={searchText} //e.target(이벤트 타겟: input태그 객체를 지칭)
                onChange={e => setSearchText(e.target.value)}/><br/> 
            <label>
                <input type='checkbox'
                    checked={stock} // 34번째줄을 통해 user가 입력하는값을 반영할 수 있다. 
                    onChange={e => setStock(e.target.checked)}/>
                {' '} only show products in stock
            </label>
        </form>
    )
}

function ProductTable({products, searchText, stock}) {
    const rows = []
    let lastCategory = null

    products.forEach(product => {
        if(product.productName.toLowerCase().indexOf(
            searchText.toLowerCase()) === -1) //-1은 검색어가 없다는 의미
        if(stock && !product.stock) return // 재고가 없을경우에도 빠져나오기
        if(product.category !== lastCategory) {
            rows.push(
                <ProductCategoryRow
                    category={product.category}
                    key={product.category}/>
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

function ProductRow({product}) {
    const productName = product.stock ? product.productName :
        <span style={{color: 'red'}}>{product.productName}</span>
    
    return (
        <tr>
            <td>{productName}</td>
            <td>{product.price}</td>
        </tr>
    )
}

const products = [
    {category: 'fruit', price: 1000, stock: true, productName: 'apple'},
    {category: 'fruit', price: 1000, stock: true, productName: 'dragonfruit'},
    {category: 'fruit', price: 2000, stock: false, productName: 'passionfruit'},
    {category: 'vegetable', price: 2000, stock: true, productName: 'spinach'},
    {category: 'vegetable', price: 4000, stock: false, productName: 'pumpkin'},
    {category: 'vegetable', price: 9000, stock: true, productName: 'pea'},
]

export default function App() {
    return <FilterableProductTable products={products}/>
}

/*
    {products: arr}
*/


// useState로 값을 넣어주지않으면 component는 값이 갱신되는지 인식하지못한다.