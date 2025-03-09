/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file was automatically generated by TanStack Router.
// You should NOT make any changes in this file as it will be overwritten.
// Additionally, you should also exclude this file from your linter and/or formatter to prevent it from being checked or modified.

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as RouteImport } from './routes/route'
import { Route as JobsIdRouteImport } from './routes/jobs/$id/route'

// Create/Update Routes

const RouteRoute = RouteImport.update({
  id: '/',
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

const JobsIdRouteRoute = JobsIdRouteImport.update({
  id: '/jobs/$id',
  path: '/jobs/$id',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof RouteImport
      parentRoute: typeof rootRoute
    }
    '/jobs/$id': {
      id: '/jobs/$id'
      path: '/jobs/$id'
      fullPath: '/jobs/$id'
      preLoaderRoute: typeof JobsIdRouteImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export interface FileRoutesByFullPath {
  '/': typeof RouteRoute
  '/jobs/$id': typeof JobsIdRouteRoute
}

export interface FileRoutesByTo {
  '/': typeof RouteRoute
  '/jobs/$id': typeof JobsIdRouteRoute
}

export interface FileRoutesById {
  __root__: typeof rootRoute
  '/': typeof RouteRoute
  '/jobs/$id': typeof JobsIdRouteRoute
}

export interface FileRouteTypes {
  fileRoutesByFullPath: FileRoutesByFullPath
  fullPaths: '/' | '/jobs/$id'
  fileRoutesByTo: FileRoutesByTo
  to: '/' | '/jobs/$id'
  id: '__root__' | '/' | '/jobs/$id'
  fileRoutesById: FileRoutesById
}

export interface RootRouteChildren {
  RouteRoute: typeof RouteRoute
  JobsIdRouteRoute: typeof JobsIdRouteRoute
}

const rootRouteChildren: RootRouteChildren = {
  RouteRoute: RouteRoute,
  JobsIdRouteRoute: JobsIdRouteRoute,
}

export const routeTree = rootRoute
  ._addFileChildren(rootRouteChildren)
  ._addFileTypes<FileRouteTypes>()

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/jobs/$id"
      ]
    },
    "/": {
      "filePath": "route.tsx"
    },
    "/jobs/$id": {
      "filePath": "jobs/$id/route.tsx"
    }
  }
}
ROUTE_MANIFEST_END */
