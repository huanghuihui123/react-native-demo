export type Res<T> = {
    data: T,
    success: boolean,
    message?: string
} 

export type RootStackParamList = {
    Home: undefined;
    Login: undefined;
    Loan: undefined;
    Repayment: undefined;
    Me: undefined;
    Details: { id: number };
};