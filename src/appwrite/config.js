import conf from "../conf.js";
import { Client, ID, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  storage;

  constructor() {
    this.client
      .setEndpoint(conf.appWriteUrl)
      .setProject(conf.appWriteProjectId);

    this.databases = new Databases(this.client);
    this.storage = new Storage(this.client);
  }

  async createPost({ title, slug, content, featureImage, status, userId }) {
    try {
      await this.databases.createDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug,
        {
          title,
          content,
          featureImage,
          status,
          userId,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: create post :: error ", error);
    }
  }

  async updataPost(slug, { title, content, featureImage, status }) {
    try {
      return (
        await this.databases.updateDocument(
          conf.appWriteDatabaseId,
          conf.appWriteCollectionId,
          slug
        ),
        {
          title,
          content,
          featureImage,
          status,
        }
      );
    } catch (error) {
      console.log("Appwrite service :: update post :: error", error);
    }
  }

  async deletePost(slug) {
    try {
      return await this.databases.deleteDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionIdm,
        slug
      );
      return true;
    } catch (error) {
      console.log("Appwrite service :: delete post :: error", error);
      return false;
    }
  }

  async getPost(slug) {
    try {
      return await this.databases.getDocument(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        slug
      );
    } catch (error) {
      console.log("Appwrite service :: get post :: error", error);
      return false;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments(
        conf.appWriteDatabaseId,
        conf.appWriteCollectionId,
        queries
      );
    } catch (error) {
      console.log("Appwrite service :: get posts :: error", error);
      return false;
    }
  }

  // file upload method

  async updloadFile(file) {
    try {
      return await this.storage.createFile(
        conf.appWriteStorageId,
        ID.unique(),
        file
      );
    } catch (error) {
      console.log("Appwrite service :: upload file :: error", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
        await this.storage.deleteFile(conf.appWriteStorageId, fileId)
        return true
    } catch (error) {
        console.log('Appwrite service :: delete file :: error', error)
        return false
    }
  }

  getFilePreview(fileId) {
    return this.storage.getFilePreview(conf.appWriteStorageId,
      fileId)
  }
}

const service = new Service();
export default service;
