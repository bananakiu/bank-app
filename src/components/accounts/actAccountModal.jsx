import { deposit, withdraw, transfer, deleteAccount } from '../../utils/accounts';
import Button from '../common/button';

// TODO: x-button to close modal
// TODO: click out to close modal
// TODO: esc key to close modal
// TODO: understand what fixed [z-10 inset-0 overflow-y-auto] classes do in Tailwind CSS

const ActAccountModal = ({
    // data states
    accounts,
    setAccounts,
    idGenerator,
    setIdGenerator,

    // form states

    // modal open
    isActAccountModalOpen,
    setIsActAccountModalOpen,
}) => {
    // functions for the form
    const handleActAccountSubmit = (event) => {
        // prevent refresh
        event.preventDefault();

        // change accounts

        // reset values
        
        // close modal
        setIsActAccountModalOpen(false)
    }

    // render
    return <>
        <section className={`
        h-screen w-full fixed z-10 inset-0 overflow-y-auto
        flex justify-center items-center text-center
        bg-black bg-opacity-50
        ${isActAccountModalOpen ? "" : "hidden"}
        `}>
            <form onSubmit={handleActAccountSubmit} className="
            py-4 px-6 mt-8 mb-4 mx-8
            border-gray-150 border-2 rounded-lg
            transition duration-200
            flex flex-col
            bg-white
            w-96
            ">
                {/* select action type */}
                <ul className="
                flex flex-row justify-stretch items-stretch
                rounded-lg border-4 border-gray-300
                ">
                    <li className="
                    w-full
                    hover:bg-gray-100
                    ">
                        Deposit
                    </li>
                    <li className="
                    w-full
                    border-l-4 border-gray-300 hover:bg-gray-100
                    ">
                        Withdraw
                    </li>
                    <li className="
                    w-full
                    border-l-4 border-gray-300 hover:bg-gray-100
                    ">
                        Transfer
                    </li>
                </ul>

                {/* showing specific components depending on chosen action type */}
                {/* Deposit Component */}
                {/* Withdraw Component */}
                {/* Transfer Component */}

                {/* submit button */}
                <div>
                    <Button
                        content="Add record"
                        color="bg-green-500"
                        hoverColor="hover:bg-green-600"
                        otherStyling="w-3/5"
                    />
                </div>
            </form>
        </section>
    </>
} 

export default ActAccountModal;

// <i class="fas fa-minus"></i> WITHDRAW
// <i class="fas fa-plus"></i> DEPOSIT
// <i class="fas fa-exchange-alt"></i> TRANSFER