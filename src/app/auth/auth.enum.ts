export enum Role {
  None = 'none',
  Clerk = 'clerk',
  Cashier = 'cashier',
  Manager = 'manager',
}

export function isAuthorized(role: Role, expectedRole: Role): boolean {
  let gateBit = expectedRole === Role.Manager ? 4 : expectedRole === Role.Clerk ? 2 : 1
  let keyBits =
    role === Role.Manager ? 7 : role === Role.Clerk ? 3 : role === Role.Cashier ? 1 : 0

  return (keyBits & gateBit) > 0
}

export enum AuthMode {
  InMemory = 'In Memory',
  CustomServer = 'Custom Server',
  FireBase = 'Firebase',
}
