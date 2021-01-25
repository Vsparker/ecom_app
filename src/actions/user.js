import {
    SET_USER_PURCHASES,
    SET_PURCHASE_DETAIL
} from './types';

export function setPurchaseDetail() {
    return ({
        type: SET_PURCHASE_DETAIL,
        payload: _id
    })
}
export function fetchUserPurchases() {
    return ({
        type: SET_USER_PURCHASES,
        payload: [
            {
                _id: 0,
                total: 19440,
                orderNumber: 'A6048248343',
                orderDate: new Date(),
                creditCard: '-0400',
                user: {
                    name: 'Joran Hudgens',
                    shippingAddress: '1234 East State Street'
                }
                },
            {
                _id: 1,
                total: 19.40,
                orderNumber: 'A0048248346',
                orderDate: new Date(),
                creditCard: '-0000',
                user: {
                    name: 'Jordan Herr',
                    shippingAddress: '1234 North State Street'
                }
                },
            {
                _id: 2,
                total: 19.40,
                orderNumber: 'A0048268343',
                orderDate: new Date(),
                creditCard: '-0040',
                user: {
                    name: 'Jordan James',
                    shippingAddress: '1234 South State Street'
                }
                },
            {
                _id: 3,
                total: 19.40,
                orderNumber: 'A0048246343',
                orderDate: new Date(),
                creditCard: '-0050',
                user: {
                    name: 'Jordan Akins',
                    shippingAddress: '1234 Bomb State Street'
                }
                },
            {
                _id: 4,
                total: 19.40,
                orderNumber: 'A0048248363',
                orderDate: new Date(),
                creditCard: '-0060',
                user: {
                    name: 'Jordan Lee',
                    shippingAddress: '1234 Tree State Street'
                }
                },
            {
                _id: 5,
                total: 19.40,
                orderNumber: 'A0546248343',
                orderDate: new Date(),
                creditCard: '-0007',
                user: {
                    name: 'Jake Kim',
                    shippingAddress: '1q34 Cola State Street'
                }
                },
            {
                _id: 5,
                total: 19.40,
                orderNumber: 'A0248248363',
                orderDate: new Date(),
                creditCard: '-0060',
                user: {
                    name: 'Joe Lee',
                    shippingAddress: '1334 Tree State Street'
                }
                },
            {
                _id: 6,
                total: 19.40,
                orderNumber: 'A0048348363',
                orderDate: new Date(),
                creditCard: '-0060',
                user: {
                    name: 'Bob Lee',
                    shippingAddress: '1434 Tree State Street'
                }                 
            },
        ]
    })
}