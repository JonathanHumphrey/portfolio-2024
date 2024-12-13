export const componentStyles = {
    avatarStyles: {
        avatarClass:
            'flex items-center justify-center mx-auto rounded-full shrink-0 ring-1 size-14 ring-cardBackground dark:bg-gray-700',
    },
    cardStyles: {
        containerClass:
            'bg-cardBackground rounded-lg w-full  dark:bg-cardBackgroundDark shadow-[3px_7px_0px_3px_rgba(0,_0,_0,_0.5)]',
        cardTitleText: 'w-fit py-2 font-medium text-2xl',
        cardContentText: 'text-white',
        cardTitleClass: 'text-white'
    },
    buttons: {
        defaultButton:
            'border border-gray-700 rounded-lg bg-cardBackground text-white dark:text-gray-100 py-1 px-2 shadow drop-shadow hover:shadow-lg hover:drop-shadow-md',
        dangerButton:
            'border border-gray-700 rounded-lg bg-red-500 text-white py-1 px-2 shadow drop-shadow hover:shadow-lg hover:drop-shadow-md',
        disabledButton:
            'border border-gray-700 rounded-lg bg-gray-200 text-gray-500 py-1 px-2 shadow drop-shadow opacity-75 disabled cursor-not-allowed',
    },
    sidebar: {
        backdropClass:
            'fixed inset-0 w-screen h-screen md:hidden z-[9] bg-black opacity-35 overflow-x-hidden',
        containerClass:
        'min-w-40 fixed top-0 left-0 bg-sidebarBackground dark:bg-sidebarBackgroundDark shadow-gray py-3 px-2 z-20 h-full transform transition-transform duration-500 ease-in-out',
        titleClass: 'primary-text font-bold font-display text-xl mb-4',
        navContainerClass: 'flex-col-is-js gap-2',
        navLinkClass: 'text-lg primary-text cursor-pointer text-gray-800 dark:text-gray-200 font-display min-w-32 p-1 rounded-md',
    },
    modal: {
        backdropClass: 'fixed w-screen h-screen z-[9] cursor-pointer opacity-45',
        containerClass:
            'w-max min-w-40 overflow-x-hidden min-h-30 z-[12] absolute bg-sidebarBackground dark:bg-sidebarBackgroundDark rounded-md p-2',
    },
    notificationModal: {
        containerClass:
            'p-1 mb-2 border-b-2 border-gray-600 dark:border-gray-100 rounded-md cursor-pointer hover:bg-black hover:bg-opacity-20 hover:dark:bg-white hover:dark:bg-opacity-20',
        iconClass:
            'absolute top-0 inline-flex items-center justify-center px-1.5 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full -right-1 -top-2',
    },
    textInput: {
        containerClass: 'flex-col-is-js w-full',
        labelClass:
            'font-bold text-gray-900 mb-1 dark:text-white dark:opacity-95',
        inputClass:
            'border p-1 border-gray-700 dark:border-gray-600 shadow-md rounded-md w-full dark:bg-gray-700 text-lg primary-text dark:shadow-slate-900',
        optionsClass:
            'border absolute bg-appBackground dark:bg-appBackgroundDark border-t-0 overflow-y-scroll border-gray-cool-300 h-32 w-full rounded-lg  z-10 p-1  mt-[-.2rem]',
        optionClass:
            'rounded-lg primary-text cursor-pointer hover:bg-gray-cool-300',
    },
    textBlock: {
        containerClass: 'flex-col-is-js',
        labelClass:
            'font-bold primary-text opacity-80 text-lg text-center text-white',
        contentClass: 'text-white',
    },

    metricCard: {
        cardContainerClass:
            'w-full cursor-pointer drop-shadow-md hover:drop-shadow-lg',
        contentContainerClass:
            'gap-2 py-4 pl-2 pr-1 min-h-32 min-w-40 flex-col-is-js',
        cardTitleClass: 'text-lg font-semibold font-display drop-shadow-sm',
        cardContentClass: 'mb-1 text-3xl font-bold font-content',
    },
}
