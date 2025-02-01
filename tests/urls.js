export const PUBLIC_URLS = {
    home: '',

    login: 'bejelentkezes',
    register: 'regisztracio',

    submit_report: 'problema-bejelentese',
    how_it_works: 'problema-bejelentese/hogyan-mukodik',

    reports: 'bejelentesek',
    map_search: 'bejelentesek/terkep',

    institution_statistics: 'bejelentesek/statisztikak/illetekesek',
    user_statistics: 'bejelentesek/statisztikak/felhasznalok',

    support: 'tamogass',
    join_us: 'csatlakozz',
    one_percent: 'tamogass/egyszazalek',
    municipalities: 'tamogass/onkormanyzatoknak',
    partners: 'tamogass/partnerek-es-tamogatok',

    about: 'rolunk/mire-jo-a-jarokelo',
    contact: 'rolunk/kapcsolat',
    team: 'rolunk/csapat',
    documents: 'rolunk/egyesulet',
    privacy_policy: 'rolunk/adatkezelesi-tajekoztato',
    terms_of_use: 'rolunk/felhasznalasi-feltetelek',
    bureau: 'rolunk/hivatal',
};

export const PROTECTED_URLS = {
    profile: 'profil',
    drafts: 'profil/piszkozatok',
    profile_edit: 'profil/kezeles',
}

export const REDIRECTED_URLS = {
    statistics: 'bejelentesek/statisztikak',
    city_statistics: 'bejelentesek/statisztikak/varosok',
}

export const ADMIN_URLS = {
    tasks_answers: 'citizen?tab=answers',
    tasks_comments: 'citizen?tab=comments',
    tasks_reports: 'citizen?tab=reports',

    reports: 'citizen/reports',
}

export const SUPER_ADMIN_URLS = {
    users: 'citizen/users',
    admins: 'citizen/administrators',
    comments: 'citizen/comment/index',
}
