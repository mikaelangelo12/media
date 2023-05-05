export interface clientes {
    email: string;
    name: string;
    phone: string;
    username: string;
    website: string;
    address: address[];
    company: company[];
}
export interface address {
    city: string;
    geo: geo[];
    street: string;
    suite: string;
    zipcode: string;
}
export interface geo {
    lat: string;
    lng: string;
}
export interface company {
    bs: string;
    catchPhrase: string;
    name: string;
}