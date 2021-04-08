export const Container = (props) => (
    <div className="container">
        {props.children}
        <footer>
            <p>&copy; 2021 - All rights reserved</p>
        </footer>
    </div>
)