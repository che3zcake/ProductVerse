import {useLoggedIn} from "../contexts/LoggedInContext.ts";

interface Product {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    rating: string;
}

interface ProductCardProps {
    product: Product;
    onEdit: (id: number) => void;
    onDelete: (id: number) => void;
}


function ProductCard({ product, onEdit, onDelete }: ProductCardProps) {
    // @ts-ignore
    const currentLoggedIn = useLoggedIn((state)=>state.loggedIn)
    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden transition-shadow duration-200 hover:shadow-lg flex flex-col">
            {/* Optional Image Placeholder */}
            <div className="bg-gray-200 h-40 flex items-center justify-center text-gray-400">
                Image Placeholder
            </div>

            <div className="p-4 flex flex-col flex-grow">
        <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 rounded-full uppercase font-semibold tracking-wide mb-2 self-start">
          {product.category || 'Uncategorized'}
        </span>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{product.name}</h3>
                <p className="text-sm text-gray-600 mb-3 flex-grow">{product.description}</p>

                <div className="flex justify-between items-center mb-3">
                    <span className="text-xl font-bold text-gray-900">${product.price.toFixed(2)}</span>
                    {product.rating}/5
                </div>

                {currentLoggedIn && (<div className="mt-auto pt-3 border-t border-gray-200 flex justify-end space-x-2">
                    <button
                        onClick={() => onEdit(product.id)}
                        aria-label={`Edit ${product.name}`}
                        className="text-sm bg-yellow-500 hover:bg-yellow-600 text-white py-1 px-3 rounded transition duration-150 ease-in-out"
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => onDelete(product.id)}
                        aria-label={`Delete ${product.name}`}
                        className="text-sm bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded transition duration-150 ease-in-out"
                    >
                        Delete
                    </button>
                </div>)}
            </div>
        </div>
    );
}

export default ProductCard;