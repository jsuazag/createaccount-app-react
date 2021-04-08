export const CategoryItem = (props) => (
    <div className="category-item">
        <div>{props.iconName}</div>
        <div>
            <h6>{props.name}</h6>
        </div>
    </div>
)