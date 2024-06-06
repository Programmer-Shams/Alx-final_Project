import { Client, Databases, Storage, Account, Avatars } from "appwrite";
export const appwriteConfig = {
    url: "https://cloud.appwrite.io/v1",
    projectId: '6541a58e56a885b4d0c4',
    databaseId: "6541e7fad8e12cb0cbc9",
    storageId: "6541e7cfe3e76a4a26c1",
    userCollectionId: "6541e898a7f1338b995d",
    postCollectionId: "6541e8383c114ae8c912",
    savesCollectionId: "6541e8ce7c25ffcb4218",
}
export const client = new Client()
client.setProject(appwriteConfig.projectId)
client.setEndpoint(appwriteConfig.url)
export const databases = new Databases(client)
export const account = new Account(client)
export const storage = new Storage(client)
export const avatars = new Avatars(client)