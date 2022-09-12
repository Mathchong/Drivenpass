import dayjs from "dayjs"

export function expirationDate(expirationDate: string) {
 
    let a = expirationDate.split('/')

    const cardExpirationDate = dayjs().year(2000 + Number(a[1])).month(Number(a[0]) - 1)

    return cardExpirationDate
}