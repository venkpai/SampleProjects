USE [CustomerDB]
GO

SET ANSI_NULLS ON
GO

SET QUOTED_IDENTIFIER ON
GO

CREATE TABLE [dbo].[Company](
	[ComapnyID] [int] IDENTITY(1,1) NOT NULL,
	[CompanyName] [varchar](500) NULL
) ON [PRIMARY]
GO
-------------------------------------------------------------------------------------------------------------------------------------------
SELECT [CompanyId]
      ,[CompanyName]
  FROM [CustomerDB].[dbo].[Company]
-------------------------------------------------------------------------------------------------------------------------------------------
INSERT INTO [dbo].[Company] VALUES ('Microsoft')
-------------------------------------------------------------------------------------------------------------------------------------------