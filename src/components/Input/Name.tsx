export function Name() {
    return (
        <div className=" flex flex-col w-full pb-4">
            <p className='text-base pl-0.5'>Ім'я</p>
            <input type="text" placeholder="Назар Стахів"
                className='w-full rounded-xl border border-input bg-transparent px-4 py-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring'
            />
        </div>
    )
}