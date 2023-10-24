import conf from "../conf/config";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  Client = new Client();
  account;

  constructor() {
    this.Client.setEndpoint(conf.appWriteUrl).setProject(appWriteProjectId);

    this.account = new Account(this.Client)
  }

  async createAccount ({email, password, name}) {
    try {
        const userAccount = await this.account.create(ID.unique(), email, password, name)

        if (userAccount) {
            return this.logIn({email, password});
        }else {
            return userAccount
        }
    } catch (error) {
        throw error
    }
  }

  async logIn ({email, password}) {
    try {
        return await this.account.createEmailSession(email, password)
    } catch (error) {
        throw error
    }
  }

  async getCurrentUser () {

    try {
        return await this.account.get()
    } catch (error) {
        throw error
    }

    return null;
  }

  async logOut() {
    try{
        await this.account.deleteSessions()
    } catch(error) {
        console.log('Appwrite service :: logout :: error', error)
    }
  }
}

const authService = new AuthService();

export default authService;
