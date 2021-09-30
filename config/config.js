const config = {
    app_name: 'Cool Rarity',
    app_description: 'Cool Rarity is an open source package for easy rarity score calculation with ERC721 NFT metadata collection.',
    collection_file_name: 'mutts_full.json',
    // collection_contract_address: '0x5e5616dC786aD4B1e3210186f8FD7Bd14dF3269F', //purrrevil
    collection_contract_address : "0x25c65721e26fa5f3c97f129f4e24972482327bc9", //mutts
    collection_name: 'Purrevil',
    collection_description: '10k "One Day I\'ll Be A Punk"-punks – a homage to the one and only CryptoPunks. Holding a OneDayPunk will give you early access to PunkScapes and reserve a profile on the PunkScape website.',
    collection_id_from: 1,
    ignore_traits: ['date'], 
    sqlite_file_name: 'database_purrevill.sqlite',
    ga: 'G-BW69Z04YTP',
    main_og_image: 'https://onedaypunk-rarity-tool.herokuapp.com/images/og.png',
    item_path_name: 'purrEvil',
    page_item_num: 60,
    content_image_is_video: false,
    content_image_frame: 'circle' // circle, rectangle
};

module.exports = config;